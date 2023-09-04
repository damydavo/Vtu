import Category from './category';
import Shared from './../component/shared';

const Pricing = () => {
    return (
        <Shared>
            <h2 className="flex justify-center md:text-4xl text-lg font-bold pb-10">Affordable Data Plans and Prices</h2>
            <div className='p-16'>
                <Category />

            </div>

        </Shared>
    );
}

export default Pricing;