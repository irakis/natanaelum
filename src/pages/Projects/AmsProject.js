import SingleProject from '../../components/SingleProject.js';
import {data} from './projects-data.js';

const AmsProject = () => {

    return (
        <SingleProject
            status={data.ams.status}
            period={data.ams.period}
            title={data.ams.title}
            text={data.ams.text}
            image={`${process.env.PUBLIC_URL}/images/projects/AMS2_logo.png`}
            alt='ams2'
            contact=''
            showImage='true'
    />
    )
}

export default AmsProject;