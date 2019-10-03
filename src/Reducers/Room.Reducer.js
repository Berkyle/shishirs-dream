// import { eventsCollection } from '../Firebase/firebase';

const RoomReducer = (room, action) => {

  switch (action.type) {
    case "CREATE":
      room = action.room;
      console.log(action.room);
      return room;
    default:
      return room;
  }
};

export default RoomReducer;