/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from "@jest/types"
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})

const config: Config.InitialOptions = {
  verbose: true,
}
export default createJestConfig(config)