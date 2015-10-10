import {Configurator} from "../../src/Configurator";

let configurator = new Configurator();
configurator.setConfiguration(require('./config.json'));
configurator.replaceWithParameters(require('./parameters.json'));
console.log('port: ', configurator.get('port'));
console.log('url: ', configurator.get('url'));
console.log('orm: ', configurator.get('orm'));