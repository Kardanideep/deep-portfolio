import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import nodejs from '../app/assets/svg/skills/nodejs.svg';
import php from '../app/assets/svg/skills/php.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import expressjs from '../app/assets/svg/skills/expressjs.svg';
import react from '../app/assets/svg/skills/react.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import shadcn from '../app/assets/svg/skills/shadcn.png';
import git from '../app/assets/svg/skills/git.svg';
import github from '../app/assets/svg/skills/github.svg';
import mvc from '../app/assets/svg/skills/MVC.png';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'nodejs':
      return nodejs;
    case 'php':
      return php;
    case 'mysql':
      return mysql;
    case 'mongodb':
      return mongoDB;
    case 'expressjs':
      return expressjs;
    case 'react':
      return react;
    case 'nextjs':
      return nextJS;
    case 'bootstrap':
      return bootstrap;
    case 'tailwind':
      return tailwind;
    case 'shadcn ui':
      return shadcn;
    case 'git':
      return git;
    case 'github':
      return github;
    case 'mvc':
      return mvc;
    default:
      break;
  }
}
