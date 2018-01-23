import Hello from './Basic/Hello'
import JSX from './Basic/Jsx'
import ComponentProps from './Basic/ComponentProps'
import StateLifecycle from './Basic/StateLifecycle'
import HandlingEvents from './Basic/HandlingEvents'

import Blog from './Example/Blog'

const Channels = [
    {
        id: 'basic',
        path: '/basic',
        title: '基础',
        menus: [
            { path: '/basic/hello', title: 'Hello World', component: Hello },
            { path: '/basic/jsx', title: 'JSX', component: JSX },
            { path: '/basic/component-props', title: 'Component Props', component: ComponentProps },
            { path: '/basic/state-lifecycle', title: 'State Lifecyle', component: StateLifecycle },
            { path: '/basic/handling-events', title: 'Handling Events', component: HandlingEvents }
        ]
    },
    {
        id: 'example',
        path: '/example',
        title: '示例',
        menus: [
            { path: '/example/blog', title: 'Blog', component: Blog }
        ]
    }
]

export default Channels