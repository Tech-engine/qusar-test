import {
    Quasar,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QImg,
    QResponsive,
} from 'quasar'

import quasarIconSet from 'quasar/icon-set/material-icons-round'

// Import icon libraries
import '@quasar/extras/material-icons-round/material-icons-round.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const quasarConfig = {
    config: {},
    components: {
        QLayout,
        QHeader,
        QDrawer,
        QPageContainer,
        QPage,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QItem,
        QImg,
        QResponsive,
    },
    directives: {
    },
    plugins: {
    },
    iconSet: quasarIconSet
}

export default function (app) {
    app.use(Quasar, quasarConfig)
}