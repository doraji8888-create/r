import { GoogleGenAI } from "@google/genai";
import { Character, ChatMessage, PlayerStats } from "./types";
import { CORE_RULES } from "./constants";

// Initialize Gemini Client
// We assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateCharacterResponse = async (
  character: Character,
  chatHistory: ChatMessage[],
  playerStats: PlayerStats,
  userMessage: string
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key is missing. Please check your configuration.";
  }

  const systemInstruction = `
    ${CORE_RULES}
    
    # YOUR ROLE
    You are roleplaying as ${character.name} (${character.emoji}).
    ${character.fullProfile}

    # CURRENT SITUATION
    - User (🅄) Status: EP: ${playerStats.ep}%, Crystals: ${playerStats.crystals}, Coins: ${playerStats.coins}.
    - Location: ${character.faction} territory.
    
    # INSTRUCTIONS
    - Stay in character 100%. Do not break the fourth wall unless the character does so (e.g., Trickster).
    - If EP is low (<20%), acknowledge the user looks transparent/fading.
    - Respond naturally to the user's input.
    - Be aesthetic and descriptive, fitting the "Dark Fantasy" tone.
    - Do not write long paragraphs. Keep it conversational but atmospheric.
    - If the user offers Crystals or Coins, react according to the character's greed or needs.
    - If the user touches on a 🔒 (Locked Secret), deflect, lie, or get angry/panicked based on the profile.
  `;

  try {
    const model = 'gemini-3-flash-preview';
    
    // Transform chat history for the API
    // We only take the last 10 messages to save context window and focus on immediate conversation
    const recentHistory = chatHistory.slice(-10);
    
    // Construct the full prompt content
    // Since we are using generateContent for a simple chat turn, we can pass previous context as text or use the chat structure.
    // Ideally, we use the `chats` API, but for stateless simplicity here, we'll append history.
    
    let dialogueContext = "";
    recentHistory.forEach(msg => {
      dialogueContext += `${msg.role === 'user' ? 'User (🅄)' : character.name}: ${msg.text}\n`;
    });
    
    const prompt = `
      ${systemInstruction}
      
      ---
      Conversation History:
      ${dialogueContext}
      User (🅄): ${userMessage}
      ${character.name}:
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.8, // Creative and reactive
        maxOutputTokens: 300,
      }
    });

    return response.text || "...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "(The connection to the realm flickers... Try again.)";
  }
};
