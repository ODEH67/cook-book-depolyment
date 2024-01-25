
export default function TimeCorrection({recipe_ID}) {

const objectIdToTimestamp = (objectId) => {
    const timestamp = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    return timestamp;
};

  const objectId = recipe_ID; // Replace with your ObjectId

const date = objectIdToTimestamp(objectId);
const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    });

return formattedDate;
}