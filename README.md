# LAB 14 - Stock Price Notifier'er

## Project

Practice with socket.io. Simulates a stock price ceiling breach to trigger notifications to subscribers.

### Author: Tyler Main && Tim Traylor

### Problem Domain

A stock subscription service that allows for members to join connections for updates on stock prices, such as Apple (AAPL) or Tesla (TSLA). Alerts will be sent to clients at desired set points via server broadcasts.

<!-- - [CI/CD GitHub Actions](https://github.com/) -->
<!-- - DEPLOYED SITE?? -->

#### Running the app

`node src/hub/index.js` will start the server to listen
`node src/stocks/aapl` will start the apple module to simulate price
`node src/stocks/gme` will start the apple module to simulate price
`node src/stocks/tsla` will start the apple module to simulate price
`node src/user/sub-one.js` will start the subscribe user to server for them. On page is able to alter set point to receive updates.

#### UML Diagram

- [UML basic](./14UML.png)

<!-- Diagram created with [MIRO](https://www.miro.com/) -->

#### Credits
