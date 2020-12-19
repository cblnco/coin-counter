# 💰 Coin counter

<p align="center">
  <img height="170" src="./src/components/mysteryBlock/ActiveBlock.svg" alt="Mystery Block"/>
</p>

A simple counter demo used to explain React basics.
<br />
This project was created with [create-react-app](https://github.com/facebook/create-react-app).

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
