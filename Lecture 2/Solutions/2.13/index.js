const language = process.argv[2]


switch (language) {
    case 'fi': {
        console.log('Hei maailma!')
        break
    }
    case 'es': {
        console.log('Hola Mundo!')
        break
    }
    case 'en': {
        console.log('Hej världen!')
        break
    }
    default: {
        console.log('Hello World!')
    }
}