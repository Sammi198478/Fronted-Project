import React from 'react'
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import {now, parseAbsoluteToLocal} from "@internationalized/date";

function FindPlace() {
  let [date, setDate] = React.useState(parseAbsoluteToLocal("2021-04-07T18:45:22Z"));
  return (
    <section className='w-[80%] mx-auto'>
      <div className="bg-[#FBFCFF] w-full h-auto lg:h-[130px] py-8 px-10 lg:ms-10 rounded-xl ">
      <h1 className='text-3xl font-bold mt-10 mb-10 text-[#26395C]'>Find the best places to eat and drink for any occasion</h1>
        <div className="grid grid-col-1 lg:grid-cols-6 gap-4 ">
          
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="Location"
              placeholder="Oshodi"
              className="w-[100%]"
            >
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Oshodi
              </AutocompleteItem>
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Hablu Programmer
              </AutocompleteItem>
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Stack Learner
              </AutocompleteItem>
            </Autocomplete>
          </div>
          <div>

            <DatePicker className="max-w-[284px]" label="Birth date" />;

          </div>
          <div>
            <DatePicker
              className="max-w-md"
              granularity="minute"
              hourCycle="12"
              hideTimeZone="false"
              label=" time"
              value={date}
              onChange={setDate}
            />
          </div>
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="Cuisine"
              placeholder="Chinese"
              className="w-[100%]"
            >
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Oshodi
              </AutocompleteItem>
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Hablu Programmer
              </AutocompleteItem>
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Stack Learner
              </AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="People"
              placeholder="2"
              className="w-[100%]"
            >
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Oshodi
              </AutocompleteItem>
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Hablu Programmer
              </AutocompleteItem>
              <AutocompleteItem
                value="Hablu Programmer"
                className="text-black"
              >
                Stack Learner
              </AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <Button color='primary' className='w-full p-7 mt-2'>Search</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FindPlace;