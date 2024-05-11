import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/java/": "structure",
  "/java/": [
    {
      text: "Java基础",
      prefix: "java基础/",
      icon: "java",
      collapsible: true,
      children: [
          "数据类型"
      ]
    },
    {
      text: "Java进阶",
      prefix: "java进阶/",
      icon: "git",
      collapsible: true,
      children: [
          "IO"
      ]
    },
    {
      text: "Spring系列",
      prefix: "spring系列/",
      icon: "spring_",
      collapsible: true,
      children: [
          "IOC",
          "AOP"
      ]
    },
  ],
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
