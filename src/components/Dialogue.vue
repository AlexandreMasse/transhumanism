<template>
  <div id="dialogue">
    <div class="gradient-top"></div>

    <!--je met en brut pour le moment histoire de pouvoir styliser, on mettra les données après -->

    <div class="dialogue-container">
      <div class="narration">
        <p>The two protagonists are having drink and come up talking about transhumanism.</p>

        <p>N.A., the pro-transhumanism one has a newspaper and show his friend an article he just read about transhumanism.</p>

        <p>The article deals with //</p>
      </div>

      <div class="dialogue-block na-talking">
        <div class="dialogue-name">N.A.</div>
        <div class="dialogue-content">
          <p>It’s crazy what scientists can do nowadays ! Can you believe it B.L. ?
            <a href="" target="_blank">A microchip was implemented to 450 volunteers.</a>
            They will be able to pay or take the subway only by using their hand !</p>
        </div>
      </div>

      <div class="dialogue-block bl-talking">
        <div class="dialogue-name">B.L.</div>
        <div class="dialogue-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam, atque consectetur deserunt est facere, hic inventore ipsam iure minus nam nemo nihil, non omnis possimus quam quos sequi.</p>
        </div>
      </div>

      <div class="dialogue-block na-talking">
        <div class="dialogue-name">N.A.</div>
        <div class="dialogue-content">
          <p>It’s crazy what scientists can do nowadays ! Can you believe it B.L. ?
            <a href="" target="_blank">A microchip was implemented to 450 volunteers.</a>
            They will be able to pay or take the subway only by using their hand !</p>
        </div>
      </div>

      <div class="dialogue-block bl-talking">
        <div class="dialogue-name">B.L.</div>
        <div class="dialogue-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam, atque consectetur deserunt est facere, hic inventore ipsam iure minus nam nemo nihil, non omnis possimus quam quos sequi.</p>
        </div>
      </div>

      <div class="dialogue-block na-talking">
        <div class="dialogue-name">N.A.</div>
        <div class="dialogue-content">
          <p>It’s crazy what scientists can do nowadays ! Can you believe it B.L. ?
            <a href="" target="_blank">A microchip was implemented to 450 volunteers.</a>
            They will be able to pay or take the subway only by using their hand !</p>
        </div>
      </div>

      <div class="dialogue-block bl-talking">
        <div class="dialogue-name">B.L.</div>
        <div class="dialogue-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam, atque consectetur deserunt est facere, hic inventore ipsam iure minus nam nemo nihil, non omnis possimus quam quos sequi.</p>
        </div>
      </div>

      <div class="dialogue-block na-talking">
        <div class="dialogue-name">N.A.</div>
        <div class="dialogue-content">
          <p>It’s crazy what scientists can do nowadays ! Can you believe it B.L. ?
            <a href="" target="_blank">A microchip was implemented to 450 volunteers.</a>
            They will be able to pay or take the subway only by using their hand !</p>
        </div>
      </div>

      <div class="dialogue-block bl-talking">
        <div class="dialogue-name">B.L.</div>
        <div class="dialogue-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aperiam, atque consectetur deserunt est facere, hic inventore ipsam iure minus nam nemo nihil, non omnis possimus quam quos sequi.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialogue',
  data () {
    return {
      title: 'Dialogue'
    }
  }
}
</script>

<style scoped lang="scss">
#dialogue {
  padding-top: 40px;
  position: relative;
  h1 {
    font-size: 26px;
    font-weight: 400;
  }
  .gradient-top {
    z-index: 5;
    position: fixed;
    width: 80vw;
    height: 22vh;
    top: 0;
    background: -moz-linear-gradient(top, rgba(11,11,11,1) 0%, rgba(11,11,11,0.99) 1%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, rgba(11,11,11,1) 0%,rgba(11,11,11,0.99) 1%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0b0b0b', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
  }

  .narration {
    text-align: center;
    margin-bottom: 10vh;
    /*pour éviter que le début du dialogue soit dans le dégradé*/
    &:first-of-type {
      padding-top: 10vh;
    }
  }

  .dialogue-block {
    width: 75%;
    display: flex;
    margin-bottom: 10vh;

    p {
      margin: 0;
      font-size: 20px;
      line-height: 4vh;

      &::first-letter {
        padding-left: 35px;
      }

      &:before {
        content: '';
        background: white;
        height: 2px;
        width: 30px;
        position: absolute;
        margin-top: 2vh;
      }
    }
    .dialogue-name {
      font-size: 25px;
      padding: 0 2vw;
    }
  }

  .na-talking {
    margin-left: auto;
    flex-direction: row-reverse;
    text-align: right;
    font-family: 'Roboto', sans-serif;

    .dialogue-name {
      color: #F9C2BF;
    }
  }
    .bl-talking {
      margin-right: auto;
      text-align: left;
      font-family: 'Baskerville', sans-serif;

      .dialogue-name {
        color: #64A0F9;
      }
    }
}
</style>
