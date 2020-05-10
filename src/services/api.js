import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * IOS Emulator: localhost
 * IOS Physical device: Machine IP
 * Android Emulator: localhost (create proxi with command: adb reverse tcp:3333 tcp:3333)
 * Android studio emulator: 10.0.2.2 (Android Studio)
 * Android genymotion emulator: 10.0.3.2 (Genymotion)
 * Android Physical device: Machine IP
 */
