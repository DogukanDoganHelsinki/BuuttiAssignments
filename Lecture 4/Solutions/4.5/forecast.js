import fs from 'fs'

let forecast
try {
    const data = fs.readFileSync('./forecast_data.json', 'utf8')
    forecast = JSON.parse(data)
} catch (e) {
    console.log('No saved data found.')
}

forecast.temperature = Number(process.argv[2])

try {
    fs.writeFileSync('./forecast_data.json', JSON.stringify(forecast, null, 2), 'utf-8')
} catch (error) {
    console.error(error)
}
