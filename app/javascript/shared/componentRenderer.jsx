import React from 'react'
import { createRoot } from 'react-dom/client'

const registerAllComponents = (componentRegistry) => {
    document.addEventListener('DOMContentLoaded', () => {
        const containers = document.querySelectorAll('[data-react-component]')

        containers.forEach(container => {
            const Component = componentRegistry[container.dataset.reactComponent]
            const props = JSON.parse(container.dataset.reactProps || '{}')

            const root = createRoot(container)
            root.render(<Component {...props} />)
        })
    })
}

export default registerAllComponents;