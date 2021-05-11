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

    cmptKey: {
      type: String,
      required: true
    },

    stackId: Number,
    stateKey: Number,
    
    route: {
      type: Object,
      required: true
    },

    isActive: {
      type: Boolean,
      required: true
    },
    
    isFirstLoaded: {
      type: Boolean,
      required: true
    }
  }
}