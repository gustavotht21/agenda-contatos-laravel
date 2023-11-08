import{r as d,j as i,a as e,d as m,F as h,b as u}from"./app-09bf4165.js";import{A as g}from"./ApplicationLogo-7957274c.js";import{N as s,R as a}from"./ResponsiveNavLink-2f148c7c.js";import{L as n}from"./index-d94f2ae0.js";import"./transition-ef8972b6.js";function f({header:r,children:l}){const[t,o]=d.useState(!1);return i("div",{className:"min-h-screen bg-gray-100",children:[i("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i("div",{className:"flex justify-between h-16",children:[e("div",{className:"flex",children:e("div",{className:"shrink-0 flex items-center",children:e(m,{href:"/",children:e(g,{className:"block h-9 w-auto fill-current text-gray-800"})})})}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"ml-3 relative",children:i("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e(s,{href:route("login"),active:route().current("login"),children:"Log in"}),e(s,{href:route("register"),active:route().current("register"),children:"Register"})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>o(c=>!c),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:i("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e("div",{className:(t?"block":"hidden")+" sm:hidden",children:i("div",{className:"pt-2 pb-3 space-y-1",children:[e(a,{href:route("login"),active:route().current("login"),children:"Log in"}),e(a,{href:route("register"),active:route().current("register"),children:"Register"})]})})]}),r&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:r})}),e("main",{children:l})]})}const x="/build/assets/computer-2c391fb9.jpg",p="/build/assets/computer2-ab3cc947.jpg";function k(){return e(h,{children:i(f,{children:[e(u,{title:"ProContact"}),i("div",{className:"w-screen bg-black flex flex-col items-center justify-between",children:[i("div",{className:"flex flex-col items-center",children:[e("h2",{className:"text-3xl text-zinc-50 font-bold mt-6",children:"ProContact"}),e("p",{className:"text-lg text-zinc-50 font-medium mt-4",children:"Mais rápido. Mais eficiente."})]}),e("img",{className:"w-3/12 rounded-lg my-8",src:p,alt:"Computer above a table"})]}),i("div",{className:"w-screen flex justify-around items-center pt-8",children:[i("div",{className:"w-3/12",children:[e("p",{className:"text-lg text-zinc-900 font-medium mt-4 break-word text-justify",children:"O sistema de cadastro de contatos mais revolucionário já criado. Com uma interface simples, porém sofisticada e elegante, o ProContact engloba o que há de melhor em um sistema."}),i("div",{className:"mt-2 flex gap-x-6",children:[e(n,{className:"text-indigo-500 underline",href:route("register"),children:" Tentar agora"}),e(n,{className:"text-indigo-500 underline",href:route("login"),children:" Log in"})]})]}),e("div",{className:"w-3/12",children:e("img",{className:"w-full rounded-lg",src:x,alt:"Computer above a table"})})]}),e("footer",{className:"absolute w-screen bottom-0 text-zinc-600 bg-zinc-300 flex py-4 justify-center",children:"Gustavo Borges © Todos os direitos reservados"})]})})}export{k as default};
