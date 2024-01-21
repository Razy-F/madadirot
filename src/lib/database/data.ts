import { connectToDB } from ".";
import { handleError } from "../utils";
import { areasArray } from "./helperFunctions";
import { Broker, IBroker } from "./models";
import { faker } from '@faker-js/faker';

export const insertBrokers = async (brokers:IBroker[]) => {
    try {
        connectToDB();
        await Broker.insertMany(brokers)
        console.log(`${brokers.length} brokers have been inserted`);
    } catch (error) {
        handleError(error)
    }
}


export const getBrokers = async () => {
    try {
        connectToDB();        
        const brokers = await Broker.find();        
        console.log(`fetch brokers from the DB`);
        console.log(brokers)
        return brokers
    } catch (error) {
        handleError(error)
    }
}


export const chartoptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Trends in Active Brokers',
      },
    },
  };
  
/*   export const chartSettings = async () => {

    const brokers:((IBroker[] | undefined)) = await getBrokers();  
    console.log(brokers)
    const labels = areasArray(brokers);
      const data = {
        labels,
        datasets: [
          {
            label: 'total brokers',      
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(0, 0, 0)',
            backgroundColor: 'rgb(0, 0, 0)',
            pointBorderWidth: 6,
          }
        ],
      };

      return data
  }   */



/* Useed For inserting tables */
/* const response = await fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=a0f56034-88db-4132-8803-854bcdb01ca1&limit=10', { cache: 'no-store' });
    const data = await response.json();

    console.log('hello world');
    console.log(data.result.records);
    insertBrokers(data.result.records) */