import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Singleton instance for the chat session to persist conversation history
let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is not defined in process.env");
    // In a real app, we might handle this gracefully in the UI
    throw new Error("API Key missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = getClient();
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
