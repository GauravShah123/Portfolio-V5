<script>
	let md;
	let newId;

	const initializeRemarkable = () => {
		md = new window.remarkable.Remarkable();
	};

	const formValues = {
		title: "",
		src: "",
		alt: "",
		credit: "",
		content: "",
	};

	function convertMarkdown() {

		console.log(newId);
		console.log(document.querySelector(".content").innerHTML);
	}
</script>

<svelte:head>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.0/remarkable.min.js"
		on:load={initializeRemarkable}
	></script>
</svelte:head>

<main>
	<input
		type="text"
		name="title"
		id="title"
		placeholder="Article Title"
		bind:value={formValues.title}
	/>
	<div class="image">
		<input
			type="text"
			name="img-src"
			id="img-src"
			placeholder="Image Source Link"
			bind:value={formValues.src}
		/>
		<input
			type="text"
			name="img-alt"
			id="img-alt"
			placeholder="Alt Text"
			bind:value={formValues.alt}
		/>
		<input
			type="text"
			name="img-credit"
			id="img-credit"
			placeholder="Credits"
			bind:value={formValues.credit}
		/>
	</div>
	<textarea name="blog" id="blog" bind:value={formValues.content} />
	<button on:click={(event) => convertMarkdown(event)}>Download</button>
	<div class="content">
		{#if md}
			{@html md.render(formValues.content)}
		{/if}
	</div>
	<div class="modal">
		<textarea name="Object" id="copyObject" cols="60" rows="10"
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
			voluptatibus minus molestias necessitatibus consectetur autem illo,
			natus facilis reiciendis, et deleniti sapiente libero tempore iure
			aliquam tenetur beatae enim dolorum cum numquam, maiores ab non eius
			impedit. Culpa, velit. Blanditiis voluptate ducimus laborum,
			repudiandae corrupti iste nostrum sit. Omnis, aliquam!</textarea
		>
	</div>
</main>

<style>
	main:has(.show) > * {
		opacity: 0.1;
		pointer-events: none;
	}
	main {
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4rem;
	}

	main > * {
		width: 50vw;
	}

	.image {
		width: calc(50vw + 4rem);
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		grid-gap: 2rem;
		padding: 0;
	}

	.image > input {
		padding: 0.5rem;
		margin: 1rem 0;
		border: none;
		border-bottom: 1px solid black;
	}

	#title {
		padding: 1rem 2rem;
		font-size: 2rem;
		font-weight: bold;
	}

	textarea#blog {
		font-family: sans-serif;
		font-size: 1rem;
		padding: 2rem;
		resize: vertical;
		height: 50vh;
	}

	button {
		width: fit-content;
		margin-top: 2rem;
		padding: 1rem 2.5rem;
		font-size: 1.25rem;
		border-radius: 4rem;
		border: none;
		outline: none;
		background-color: dodgerblue;
		color: white;
		cursor: pointer;
	}

	.content {
		display: none;
	}

	.modal {
		position: absolute;
		background-color: white;
		z-index: 1000;
		border-radius: 10px;

		display: flex;
		justify-content: center;
		align-items: center;

		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		display: none;
	}

	.modal textarea {
		padding: 0.5rem;
	}

	/* .modal.show {
		display: flex;
		opacity: 1;
		pointer-events: all;
	} */
</style>
