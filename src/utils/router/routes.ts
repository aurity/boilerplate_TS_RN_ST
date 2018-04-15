import TubeListPage from '../../tfl/tube/components/tube-list.page'
import TubeDetailPage from '../../tfl/tube/components/tube-details.page'

export default {
  TubeListPage: { screen: TubeListPage },
  TubeDetailsPage: { screen: TubeDetailPage },
}

const routes = {
  tubeListPage: 'TubeListPage',
  tubeDetailsPage: 'TubeDetailsPage',
}

export { routes }
