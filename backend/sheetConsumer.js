import { getAuthToken, getSpreadSheetValues } from './sheetApi.js'

async function getTrackerValues() {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
      spreadsheetId: '1_xsDfFHZSgGANCFFVZGdPMnaCLlDHIB7xi4XYvZz7yQ',
      sheetName: 'Tracker',
      auth
    })
    if (response){
      return response.data.values
    } else {
      // console.log('error')
    }
}

export default getTrackerValues;