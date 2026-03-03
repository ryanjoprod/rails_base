// rename this file and folder to whatever component needs to be rendered

import registerAllComponents from '@shared/componentRenderer'
// import registerAllComponents from '../../shared/componentRenderer'

import Welcome from '@components/Recipes/Welcome'  // 'Layout' can be nested

const componentRegistry = {
    'welcome': Welcome,
}

registerAllComponents(componentRegistry)