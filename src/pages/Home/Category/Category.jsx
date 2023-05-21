import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
 
   
    return (
        <div className='mt-5'>
            <div>
                <h2 className='text-5xl text-center font-bold mb-5'>Our Products</h2>
            </div>
            <div className='text-center'>
                
                <Tabs>
                    <TabList>
                        <Tab >Football</Tab>
                        <Tab>Cricket</Tab>
                        <Tab>Badminton</Tab>
                    </TabList>


                    <TabPanel>
                        <div>
                           
                            <h3>Football</h3>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <h3>Cricket</h3>
                            {/* Render your Language Toys here */}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div>
                            <h3>Badminton</h3>
                            {/* Render your Engineering Toys here */}
                        </div>
                    </TabPanel>

                     
                </Tabs>
            </div>

        </div>
    );
};

export default Category;