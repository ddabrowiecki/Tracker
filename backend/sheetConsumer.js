import { getAuthToken, getSpreadSheetValues } from './sheetApi.js'

async function getTrackerValues() {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId: '1_xsDfFHZSgGANCFFVZGdPMnaCLlDHIB7xi4XYvZz7yQ',
      sheetName: 'Tracker',
      auth
    })
    return JSON.stringify(response.data.values)
}

export default getTrackerValues;