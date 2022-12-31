# Lofi Generation Model
This repo allows you to train midi files on a 3-layer LSTM model and generate an output midi file. To read more on how it is built, please read the blog post here.

## Usage Instruction

1. Clone this repository and create a virtual environment by typing into your command line:

    ```
    python3 -m venv lstmmodel
    ```

2. Install all required packages by typing into your command line:

    ```
    python3 -m pip install -r requirements.txt
    ```

3. To train the network, run the below line in your terminal:

	```
	python3 lstm.py
	```

	Note: Each note, chord, and rest is tokenized without their duration, so the model does not learn the beat. Chords are embedded using normal order in the form of "#.#.#.#". 

	Default epochs are 400, you could stop the process at any point. The latest epoch weights will be saved in the root folder.

4. To generate music, run the below line in your terminal:

	```
	python3 predict.py
	```
	The default weight the model uses is from the file weights.hdf5. The generated midi file is saved to test_output.midi. 

	Note: Since the the model does not learn the beat, each note duration is randomly sampled from a probability distribution that you feed in. Default duration distribution is 0.65 for eighth notes, 0.25 for 16th notes, 0.05 for half and quarter notes. Rests are always generated as 16th rests.


Credit: huge thanks to Skuldur's [repo](https://github.com/Skuldur/Classical-Piano-Composer).