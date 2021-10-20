import React from 'react';

const Blog = () => {
    return (
        <div className="container">
            <div className="d-lg-flex p-2 gap-3 ">
                <div className="m-4">
                    <img className="rounded w-100" src="https://as2.ftcdn.net/v2/jpg/02/51/33/29/500_F_251332952_5PZoBEOHumh5D8ifqXI7LyJpMRI6MoYH.jpg" alt="" />
                </div>

                <div className="m-4 p-2">
                    <h2> Types of patient transportation </h2>
                    <p>Ground EMS transportation travel anywhere where roads are accessible. This option is usually the least expensive transport mode for short and mid-range...</p>
                </div>
            </div>

            <div className="d-lg-flex p-2 gap-3 ">
                <div className="m-4">
                    <img className="rounded w-100 " src="https://ambulanceusa.com/wp-content/uploads/2021/07/Ambulance-USA-Rotor-wing-Helicopter-at-Heliport-scaled.jpg" alt="" />
                </div>
                <div className="m-4 ">
                    <h2> Other factors to consider for ambulance transfers </h2>
                    <p>The patient’s environment plays a role when choosing the proper mode of transport and equipment. An example goes as follows: A non-ambulatory patient lives on a second floor and needs to get to their room but has stairs and narrow pathways as obstacles. This calls for a transfer using a stair chair or...
                    </p>
                </div>
            </div>
            <div className="d-lg-flex p-2 gap-3 ">
                <div className="m-4">
                    <img className="rounded w-100" src="https://ambulanceusa.com/wp-content/uploads/2021/07/Ambulance-USA-Avoiding-Bad-Experiences-980x654.jpg" alt="" />
                </div>
                <div className="m-4 p-2 ">
                    <h2> Inentifying the type of medical transport</h2>
                    <p>Identifying the type of medical transport is an important step that always needs to be the safest for the patient, based on the patient’s current medical needs, mobility status, and environment....
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Blog;