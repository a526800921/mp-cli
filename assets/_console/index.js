let _console = {}
for (const key in console) {
  _console[key] = () => { }
}

export default _console