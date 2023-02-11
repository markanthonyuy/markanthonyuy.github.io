# Personal Website

markanthonyuy.com

visit site [here](http://markanthonyuy.com/)

## How to generate build

1. Checkout [v2](https://github.com/markanthonyuy/markanthonyuy.github.io/tree/v2) branch
2. Make updates you want
3. Run `npm run build` (This will generate file in `/out` folder)
4. Verify it's working by going to `/out` folder and run `http-server`
5. Once verified working, run this command `cp -r ./out/. ../markanthonyuy.com/.` (This will copy the contents of `/out` folder to `/markanthonyuy.com` folder where you will push it to the repository. `/markanthonyuy.com` should be pointing to your [master](https://github.com/markanthonyuy/markanthonyuy.github.io/tree/master) branch)
