# buckwalter-transliteration
A small npm module script that transliterates Arabic text using the Buckwalter Transliteration Scheme (of several versions). Useful for NLP experiments where latin script is preferred.

## Supported Modules
1. **bw2utf and utf2bw:** Classical Buckwalter transliteration.
2. **bw2utfsafe and utf2bwsafe:** Safer version of classical Buckwalter transliteration. Instead of symbols, it uses accented latin character. The output is still in UTF8 format.
3. **qac2utf utf2qac:** An extended version of classical Buckwalter transliteration. As described in corpus.quran.com

## Install
`npm install aosaimy/buckwalter-transliteration`

## Usage
### Via Command Line: 
`echo 'muHmd' | node main.js -t "bw2utf"`

```
Usage: main.js -f filename -t type

Options:
  --version   Show version number                                      [boolean]
  -f          input file                      [required] [default: "/dev/stdin"]
  -t          Type of transliteration. Supported mappings: bw2utfsafe utf2bwsafe
              bw2utf utf2bw qac2utf utf2qac                           [required]
  -h, --help  Show help                                                [boolean]
  ```

### In code:
var bt = require('aosaimy/buckwalter-transliteration')('bw2utf')
console.log(bt('muHmd'))

## Test
This scripts has its own unit testing. You can add yours to `test/` folder. To run unit tests, run  `npm test`.
