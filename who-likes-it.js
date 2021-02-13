function likes(names) {
    let others  = names.length - 2

    return names.length === 0 ? `no one likes this`
    : names.length === 1 ? `${names} likes this`
    : names.length === 2 ? `${names[0]} and ${names[1]} like this`
    : names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${others} others like this`
}