"use server";
import OpenAI from 'openai';
import { OPENAI_GPTkey } from './constants';
const openAi = new OpenAI({
  apiKey: OPENAI_GPTkey, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser:true,
});

export default openAi;