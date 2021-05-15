export function genPageProps(){
  return {
    path: {
      type: String
    },

    title: String,

    isTab: {
      type: Boolean,
      required: true
    },

    tabIndex: Number,

    stateKey: Number,
    
    route: {
      type: Object,
      required: true
    },

    isActive: {
      type: Boolean,
      required: true
    },
    
    isFirstLoad: {
      type: Boolean,
      required: true
    },
    
    stackId: Number
  }
}