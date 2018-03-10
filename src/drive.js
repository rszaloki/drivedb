import googleApi from 'src/google'
import MultiPartBuilder from 'src/lib/multipart'

const DEFAULT_FIELDS = 'id,name,mimeType'

export function saveFile (file, doc) {
  if (file.name) {
    googleApi.then(function (gapi) {
      let path
      let method

      if (file.id) {
        path = '/upload/drive/v3/files/' + encodeURIComponent(file.id)
        method = 'PUT'
      } else {
        path = '/upload/drive/v3/files'
        method = 'POST'
      }

      let multipart = new MultiPartBuilder().append('application/json', JSON.stringify(file)).
        append(file.mimeType, doc).finish()

      return gapi.client.request({
        path: path,
        method: method,
        params: {
          uploadType: 'multipart',
          supportsTeamDrives: true,
          fields: DEFAULT_FIELDS
        },
        headers: {'Content-Type': multipart.type},
        body: multipart.body
      })
    }).then(function (response) {
      console.log(response)
      return response.result
    })
  }
}
