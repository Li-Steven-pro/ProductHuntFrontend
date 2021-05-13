# ProductHuntFrontend

Frontend application to retieve products from a specific day. It displays a list of product and a chart (products/topic)

## Prerequisites

### Installation

1. Clone the repo
  ```sh
  git clone https://github.com/Li-Steven-pro/ProductHuntFrontEnd.git
  ```
2. Install NPM packages
  ```sh
  npm install
  ```
### Environment variable   

Set the server url (see [ProductHuntBackend](https://github.com/Li-Steven-pro/ProductHuntBackend)) in [``environment.ts``](https://github.com/Li-Steven-pro/ProductHuntFrontend/blob/develop/src/environments/environment.ts) (Replace ``"http://localhost:8080"`` by your url)

## Development server

### Running the server 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
For now, only tests on the api service are meaningful. 


## Dependencies : 

1. Angular Material 
2. Apexcharts
3. Moment
