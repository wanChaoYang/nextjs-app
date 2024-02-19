'use client'

import { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import Router from 'next/router'
// import Link from 'next/link'
export default function Home() {


  useEffect(() => {
    //页面渲染之后直接加载
    const div = document.getElementById('test') as HTMLElement;
    div.innerHTML = `Can character AI creators see your chats?
   The character AI creators can't see your complete chats with the chat bot because of the privacy policy. However, the text might be analyzed for further training without leaking its owner.`

    //所有document渲染完后加载
    const Node = document.createElement('div');
    Node.innerHTML = "Get stuck when writing an essay, story, or ad promotion? Want more suggestions about traveling, job, or study? Let the AI Chatbot do what it's best at. Simply ask anything that bothers you and get the desired answer. Now, start AI online chatting with the prompts below.";
    console.log('node', Node);
    const body = document.getElementsByTagName("body")[0];
    console.log('body', body);
    body.appendChild(Node);
  }, []);

  return (
    <div>
      {/* 
      <Link href="/list">
        <button >跳转</button>
      </Link>
      <Link href="/list/create">
        <button >create</button>
      </Link> */}
      <div id="test"></div>
      <p>
        Can I have an AI girlfriend chat? Absolutely yes! With HeyReal, you can talk with a human-like AI character and create your AI characters. With detailed descriptions, they appear to have human emotions, personalities, and unique speaking tones. No matter whether you want roleplay AI chatbots, anime AI chat, or any other type, HeyReal has you covered.
      </p>
    </div>
  );
}
