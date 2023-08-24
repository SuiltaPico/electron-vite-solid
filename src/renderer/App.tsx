import type { Component } from "solid-js";
import logoElectron from "./assets/electron.svg";
import logoVite from "./assets/vite.svg";
import logoSolid from "./assets/solid.svg";
import styles from './App.module.css';
import HelloWorld from "./components/HelloWorld";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <a href="https://www.electronjs.org/" target="_blank">
        <img src={logoElectron} class={styles.logo} alt="Electron logo" />
      </a>
      <a href="https://vitejs.dev/" target="_blank">
        <img src={logoVite} class={styles.logo} alt="Vite logo" />
      </a>
      <a href="https://www.solidjs.com/" target="_blank">
        <img src={logoSolid} class={styles.logo} alt="Solid logo" />
      </a>
      <HelloWorld msg="Hello World!" />
    </div>
  );
};

export default App;
