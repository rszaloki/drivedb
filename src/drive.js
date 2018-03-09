import gclient from 'src/google'

const driveFiles = gclient.then(() => window.gapi.client.drive.files)

export function saveFile (file, doc) {
  if (file.name) {
    if (!file.id) {
      return driveFiles.then(files => files.create({
        media: {
          body: JSON.stringify(doc),
          mimeType: 'application/json'
        },
        resource: {
          name: file.name + '.json'
        },
        fields: 'id'
      }))
    }
  }
}
