<script lang="ts">
  import Switch from "@smui/switch";
  import FormField from "@smui/form-field";

  let checked1 = false;
  let checked2 = false;
</script>

<div>
  <FormField>
    <Switch bind:checked={checked1} icons={false} />
  </FormField>
</div>
