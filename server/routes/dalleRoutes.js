import express from 'express';
import * as dotenv from 'dotenv';
// import { v2 as cloudinary } from 'cloudinary';
import { Configuration, OpenAIApi } from 'openai';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => res.send('Hello from Dall-e'));

export default router;
