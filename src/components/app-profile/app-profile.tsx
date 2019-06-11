import { Component, Prop, h } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css"
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <section class="app-profile">
          <p>
            Hello! <ion-icon name="person" size="small" /> My name is
            {this.normalize(this.match.params.name)}. My name was passed in through a route param!
          </p>
          <button>Hello</button>
        </section>
      );
    }
  }
}
