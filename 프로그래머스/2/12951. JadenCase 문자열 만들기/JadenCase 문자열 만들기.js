const solution = (s) => s.split(' ').map(s=>s.slice(0,1).toUpperCase().concat(s.slice(1).toLowerCase())).join(' ')