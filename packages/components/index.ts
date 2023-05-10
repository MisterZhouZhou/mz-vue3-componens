import pack from './package.json'
import * as components from './src/index'

export * from './src/index'

const install = (app: any) => {
	for (const comKey in components) {
		app.component((components as any)[comKey].name, (components as any)[comKey])
	}
}

export default {
	name: pack.name,
	version: pack.version,
	install,
}
