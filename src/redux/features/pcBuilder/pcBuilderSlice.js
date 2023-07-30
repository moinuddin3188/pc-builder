import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cpu: undefined,
    motherboard: undefined,
    ram: undefined,
    powerSupplyUnit: undefined,
    storageDevice: undefined,
    monitor: undefined,
    others: undefined
  }

export const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      action.payload?.category === "CPU or Processor" ? state.cpu = action.payload : undefined
      action.payload?.category === "Motherboard" ? state.motherboard = action.payload : undefined
      action.payload?.category === "RAM" ? state.ram = action.payload : undefined
      action.payload?.category === "Power Supply Unit" ? state.powerSupplyUnit = action.payload : undefined
      action.payload?.category === "Storage Device" ? state.storageDevice = action.payload : undefined
      action.payload?.category === "Monitor" ? state.monitor = action.payload : undefined
      action.payload?.category === "Others" ? state.others = action.payload : undefined
    },
    removeFromPcBuilder: (state, action) => {
        action.payload?.category === "CPU or Processor" ? state.cpu = undefined : state.cpu
        action.payload?.category === "Motherboard" ? state.motherboard = undefined : state.motherboard
        action.payload?.category === "RAM" ? state.ram = undefined : state.ram
        action.payload?.category === "Power Supply Unit" ? state.powerSupplyUnit = undefined : state.powerSupplyUnit
        action.payload?.category === "Storage Device" ? state.storageDevice = undefined : state.storageDevice
        action.payload?.category === "Monitor" ? state.monitor = undefined : state.monitor
        action.payload?.category === "Others" ? state.others = undefined : state.others
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToPcBuilder, removeFromPcBuilder } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer