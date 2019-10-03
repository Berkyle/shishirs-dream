import { roomsCollection } from '../Firebase/Firebase';

const RoomReducer = (room, action) => {

  switch (action.type) {
    case "CREATE":
      room = action.room;
      console.log(action.room);
      roomsCollection.add(room);
      return room;
    default:
      return room;
  }
};

export default RoomReducer;