import { DashboardContainer } from '../../styles/dashboard';
import { Graphic } from '../../components/Graphic';
import { GraphicWeek } from '../../components/GraphicWeek';
import { GraphicMonth } from '../../components/GraphicMonth';
import { LastRequests } from '../../components/LastRequests';
import { Header } from '../../components/Header';
import { CardInfo } from '../../components/CardInfo';

export const Dashboard = () => {
    return (
        <DashboardContainer>
            <Header />
            <CardInfo />
            <Graphic />
            <section className="dashboard-graphic-report">
                <GraphicWeek />
                <GraphicMonth />
            </section>
            <LastRequests />
        </DashboardContainer>
    )
}