# 💰 Coin counter

<p align="center">
  <img height="170" src="./src/components/mysteryBlock/ActiveBlock.svg" alt="Mystery Block"/>
</p>

A counter demo used to explain React basics.
<br />
You can find an online demo right <a href="https://cblnco.github.io/coin-counter/" target="_blank">**here**</a>.
<br />
This project was created with <a href="https://github.com/facebook/create-react-app" target="_blank">create-react-app</a>.

## 📦 Installation and usage

To install this project run the following command in your teminal: 
```bash
yarn install
```
Then you can play around with it, in your local development environment, with the following command:
```bash
yarn start
```

This project will start in the port 3000 of your localhost by default.


## 🛠️ Tweaking the Counter component

The counter component receives two props: 
* ```limit```: A number that determines when the counter will stop increasing. **[REQUIRED]**
* ```animationTimeout```: animation duration in miliseconds. **[OPTIONAL]**

The following example will set a limit of 10 coins and the animation duration will be 230 ms:
```jsx
<Counter limit={10} animationTimeout={230} />
```

## ⚖️ License

This project is licensed under the [MIT License](https://raw.githubusercontent.com/cblnco/coin-counter/master/LICENSE).
