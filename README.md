## CatMash
CatMash is a facemash-like javascript project, to vote for the cutest cat ever! 

This monorepo includes two mainly parts.
- /Api : Node, Express, Mongoose 
- /Client : ReactJs, React-Hooks, React-Context, Jest, Flow

### Development
#### Requirement
- [Node](https://www.google.com) 8.10.0 or later
- [Yarn](https://yarnpkg.com/lang/en/)
- [Now](https://zeit.co/now)
#### Setup
```bash
git clone https://github.com/miquelvincent/catmash.git
cd catmash
yarn install
yarn start
```
### Deploy

now-cli is installed on my git repository so at each push the app is deployed and served on alias [https://catmash.now.sh](https://catmash.now.sh)

But if you want to deploy manually you can execute this command line from your catmash folder root
```bash
now
```


